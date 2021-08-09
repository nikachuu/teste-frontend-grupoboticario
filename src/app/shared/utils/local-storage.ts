export class LocalStorageUtils {
  public getUserLocalStorage() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public saveUserLocalStorage(user: string) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getTokenLocalStorage(): string {
    return localStorage.getItem('token');
  }

  public saveTokenLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  public saveLoginInfoLocalStorage(response: any) {
    this.saveTokenLocalStorage(response.accessToken);
    this.saveUserLocalStorage(response.user);
  }
  public clearUserInfoLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
