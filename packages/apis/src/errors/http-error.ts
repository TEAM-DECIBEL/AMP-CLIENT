import { HTTP_STATUS_CODE } from '../constants/http-status';

const STATUS_NAME_MAP: Record<number, string> = {
  [HTTP_STATUS_CODE.BAD_REQUEST]: 'BAD_REQUEST',
  [HTTP_STATUS_CODE.UNAUTHORIZED]: 'UNAUTHORIZED',
  [HTTP_STATUS_CODE.NOT_FOUND]: 'NOT_FOUND',
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: 'INTERNAL_SERVER_ERROR',
};

export class HTTPError extends Error {
  statusCode: number;
  code?: number;

  constructor(statusCode: number, message?: string, code?: number) {
    super(message);
    const statusName = STATUS_NAME_MAP[statusCode];
    this.name = statusName ? `HTTPError: ${statusName}` : 'HTTPError';
    this.statusCode = statusCode;
    this.code = code;
  }
}
