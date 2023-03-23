export default interface IHttpRepository {
  instance: any;
  port: number;

  start(): Promise<void>
}