import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

interface MyAxiosRequestConfig<D> extends AxiosRequestConfig<D> {
  /**
   * 是否携带时间戳
   * https://neteasecloudmusicapi.vercel.app/#/?id=%e8%b0%83%e7%94%a8%e5%89%8d%e9%a1%bb%e7%9f%a5
   */
  timestamp?: boolean;
}

export const DEFAULT_CONFIG = {
  // 基础url前缀
  baseURL: 'http://netease-cloud-music-api-lyart-rho.vercel.app/',
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: 'json',
} as AxiosRequestConfig;

class Http {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.initInterceptors();
  }

  public get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: MyAxiosRequestConfig<D>
  ): Promise<R> {
    return this.instance.get(url, config as any);
  }

  private initInterceptors() {
    const instance = this.instance;
    instance.interceptors.request.use((config) => {
      console.log(`[axios] config`, config);
      const {
        method,
        timestamp = false,
        params = {},
      } = config as MyAxiosRequestConfig<any>;

      if (timestamp) {
        config.params = Object.assign(params, {
          timestamp: new Date().getTime(),
        });
      }

      const headers: any = {};
      if (method === 'get') {
        // headers['Cache-Control'] = 'no-cache';
      }
      return {
        ...config,
        headers,
      };
    });

    instance.interceptors.response.use(
      (response) => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
          data = JSON.parse(response.request.responseText);
        } else {
          data = response.data;
        }

        return data;
      },
      (err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误';
              break;
            case 401:
              err.message = '未授权，请登录';
              break;
            case 403:
              err.message = '拒绝访问';
              break;
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`;
              break;
            case 408:
              err.message = '请求超时';
              break;
            case 500:
              err.message = '服务器内部错误';
              break;
            case 501:
              err.message = '服务未实现';
              break;
            case 502:
              err.message = '网关错误';
              break;
            case 503:
              err.message = '服务不可用';
              break;
            case 504:
              err.message = '网关超时';
              break;
            case 505:
              err.message = 'HTTP版本不受支持';
              break;
            default:
          }
        }
        console.log(err);
        return Promise.reject(err); // 返回接口返回的错误信息
      }
    );
  }
}

export default new Http(DEFAULT_CONFIG);
