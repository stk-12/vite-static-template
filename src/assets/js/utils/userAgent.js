export class UserAgent {
  constructor() {
    this.ua = navigator.userAgent;

    this.DOM = {};
    this.DOM.body = document.body;
    // this.DOM.head = document.head;

    // this.tabletView = 1400; // タブレットのviewportサイズ

    this._check();
  }

  _check() {
    if (this.ua.indexOf('iPhone') != -1 || this.ua.indexOf('iPod') != -1 || this.ua.indexOf('Android') != -1 && this.ua.indexOf('Mobile') != -1) {
      //sp
      this.DOM.body.classList.add('is-view-sp');
    } else if (this.ua.indexOf('iPad') != -1 || this.ua.indexOf('Android') != -1) {
      //tab
      this.DOM.body.classList.add('is-view-tab');
      // this._setTabletViewport();
    } else {
      // pc
      this.DOM.body.classList.add('is-view-pc');
    }
  }

  // タブレットを固定ビューポートにする
  // _setTabletViewport() {
  //   this.DOM.head.insertAdjacentHTML('beforeEnd', `<meta name="viewport" content="${ this.tabletView }">`);
  // }
}