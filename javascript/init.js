// This script for initialize the page.

const rootPath = location.href.substr(0,
  location.href.indexOf('website')+'website'.length);

//#region GET_ELEMENTS
const head = document.head;
const body = document.body;
//#endregion GET_ELEMENTS

//#region INITIALIZE HEAD

//#region SET_TITLE
if (document.title == "") {
  head.innerHTML += `<title>The X Programming Language</title>`
}
//#endregion SET_TITLE

//#region SET_ICON
head.innerHTML +=
`<link
  rel="icon"
  href="https://raw.githubusercontent.com/the-xlang/resources/main/x.svg?sanitize=true">`
//#endregion SET_ICON

//#region SET_STYLES
head.innerHTML += `<link href="${rootPath}/styles/theme.css" rel="stylesheet" type="text/css">`
head.innerHTML += `<link href="${rootPath}/styles/fonts.css" rel="stylesheet" type="text/css">`
head.innerHTML += `<link href="${rootPath}/styles/navigation.css" rel="stylesheet" type="text/css">`
head.innerHTML += `<link href="${rootPath}/styles/footer.css" rel="stylesheet" type="text/css">`
head.innerHTML += `<link href="${rootPath}/styles/ui.css" rel="stylesheet" type="text/css">`
head.innerHTML += `<link href="${rootPath}/styles/code.css" rel="stylesheet" type="text/css">`
//#endregion SET_STYLES

//#endregion INITIALIZE HEAD

//#region INITIALIZE_BODY

//#region INITIALIZE_NAVIGATION
body.innerHTML =
`
<!-- Navigation bar. -->
<div id="navigation" class="navigation">
  <!-- Logo. -->
  <a href="${rootPath}/index.html">
  <img
    class="navigation-logo"
    src="https://raw.githubusercontent.com/the-xlang/resources/main/x.svg?sanitize=true">
  </a>
  <a href="https://github.com/the-xlang/x/releases">Download</a>
  <a href="">Docs</a>
  <a href="${rootPath}/pages/community.html">Community</a>
  <a href="${rootPath}/pages/contributing.html">Contribute</a>
</div>
<div class="navigation-marginer"></div>
` + body.innerHTML
//#endregion INITIALIZE_NAVIGATION

//#region INITIALIZE_FOOTER
body.innerHTML +=
`
<div class="footer-margin"></div>
<div id="footer" class="footer">
  <div class="footer-table">
    <table>
    <tr>
    <td>
      <div style="margin-right: 200px;">
      <center>
        <img
          class="footer-logo"
          src="https://raw.githubusercontent.com/the-xlang/resources/main/x.svg?sanitize=true">
        <div class="footer-desc">Made with in Turkey.</div>
        <div id="copyright"></div>
      </center>
      </div>
    </td>
    <td>
      <div class="footer-title">Using X</div>
      <a href="https://github.com/the-xlang/x/releases">Download</a> <br>
      <a href="${rootPath}/pages/community.html">Community</a> <br>
      <a href="">Docs</a> <br>
      <a href="">Code Samples</a> <br>
      <a href=""></a>
    </td>
    <td>
      <div class="footer-title">Contribute</div>
      <a href="https://github.com/the-xlang/x">Source Code</a> <br>
      <a href="https://github.com/the-xlang/x/fork">Fork Project</a> <br>
      <a href="https://github.com/the-xlang/x/issues">Issues</a> <br>
      <a href="https://github.com/the-xlang/x/discussions">Discussions</a> <br>
      <a href="${rootPath}/pages/contributing.html">Guideline</a>
    </td>
    <td>
      <div class="footer-title">Community</div>
      <a href="https://github.com/the-xlang">GitHub Organization</a> <br>
      <a href="https://stackoverflow.com/questions/tagged/x">Stack Overflow</a> <br>
      <a href="${rootPath}/pages/code_of_conduct.html">Code of Conduct</a> <br>
      <a href="${rootPath}/pages/license.html"">License</a> <br>
      <a href=""></a>
    </td>
    </tr>
    </table>
  </div>
</div>
</div>
`
//#endregion INITIALIZE_FOOTER

//#endregion INITIALIZE_BODY
