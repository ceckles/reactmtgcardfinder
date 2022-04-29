[![Lint Code Base](https://github.com/ceckles/reactmtgcardfinder/actions/workflows/super-linter.yml/badge.svg)](https://github.com/ceckles/reactmtgcardfinder/actions/workflows/super-linter.yml)
[![CodeQL](https://github.com/ceckles/reactmtgcardfinder/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/ceckles/reactmtgcardfinder/actions/workflows/codeql-analysis.yml)

# MTG Card Finder

a remake of my vanila JS app that searches for Magic Cards and displays a list of card and details for the card. as well as links to purchase the card from vendors.

The project uses react hooks: useEffects useState and functional componets to display a list and Cards from external API to the user allowing them to find card and get details about the card/s, I am using Mantin component lib for HTML elements and also provide a Dark/light theme switcher and hotkey.

## Languages and Tools for Project

<img align="left" alt="VS Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;"/>
<img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />
<img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />
<img align="left" alt="JS" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />
<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />
<img align="left" alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="padding-right:10px;" />
<img align="left" alt="Mantine" width="26px" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNjMgMTYzIj48cGF0aCBmaWxsPSIjMzM5QUYwIiBkPSJNMTYyLjE2MiA4MS41YzAtNDUuMDExLTM2LjMwMS04MS41LTgxLjA4LTgxLjVDMzYuMzAxIDAgMCAzNi40ODkgMCA4MS41IDAgMTI2LjUxIDM2LjMwMSAxNjMgODEuMDgxIDE2M3M4MS4wODEtMzYuNDkgODEuMDgxLTgxLjV6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTY1Ljk4MyA0My4wNDlhNi4yMzQgNi4yMzQgMCAwMC0uMzM2IDYuODg0IDYuMTQgNi4xNCAwIDAwMS42MTggMS43ODZjOS40NDQgNy4wMzYgMTQuODY2IDE3Ljc5NCAxNC44NjYgMjkuNTIgMCAxMS43MjYtNS40MjIgMjIuNDg0LTE0Ljg2NiAyOS41MmE2LjE0NSA2LjE0NSAwIDAwLTEuNjE2IDEuNzg2IDYuMjEgNi4yMSAwIDAwLS42OTQgNC42OTMgNi4yMSA2LjIxIDAgMDAxLjAyOCAyLjE4NiA2LjE1MSA2LjE1MSAwIDAwNi40NTcgMi4zMTkgNi4xNTQgNi4xNTQgMCAwMDIuMTc3LTEuMDM1IDUwLjA4MyA1MC4wODMgMCAwMDcuOTQ3LTcuMzloMTcuNDkzYzMuNDA2IDAgNi4xNzQtMi43NzIgNi4xNzQtNi4xOTRzLTIuNzYyLTYuMTk0LTYuMTc0LTYuMTk0aC05LjY1NWE0OS4xNjUgNDkuMTY1IDAgMDA0LjA3MS0xOS42OSA0OS4xNjcgNDkuMTY3IDAgMDAtNC4wNy0xOS42OTJoOS42NmMzLjQwNiAwIDYuMTczLTIuNzcxIDYuMTczLTYuMTk0IDAtMy40MjItMi43NjItNi4xOTMtNi4xNzMtNi4xOTNIODIuNTc0YTUwLjExMiA1MC4xMTIgMCAwMC03Ljk1Mi03LjM5NyA2LjE1IDYuMTUgMCAwMC00LjU3OC0xLjE1MyA2LjE4OSA2LjE4OSAwIDAwLTQuMDU1IDIuNDM4aC0uMDA2eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTU2LjIzNiA3OS4zOTFhOS4zNDIgOS4zNDIgMCAwMS42MzItMy42MDggOS4yNjIgOS4yNjIgMCAwMTEuOTY3LTMuMDc3IDkuMTQzIDkuMTQzIDAgMDEyLjk5NC0yLjA2MyA5LjA2IDkuMDYgMCAwMTcuMTAzIDAgOS4xNDUgOS4xNDUgMCAwMTIuOTk1IDIuMDYzIDkuMjYyIDkuMjYyIDAgMDExLjk2NyAzLjA3NyA5LjMzOSA5LjMzOSAwIDAxLTIuMTI1IDEwLjAwMyA5LjA5NCA5LjA5NCAwIDAxLTYuMzg4IDIuNjMgOS4wOTQgOS4wOTQgMCAwMS02LjM5LTIuNjMgOS4zIDkuMyAwIDAxLTIuNzU1LTYuMzk1eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg==" style="padding-right:10px;"/>
<img align="left" alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />
<img align="left" alt="GitHub dark" width="26px" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png#gh-dark-mode-only" style="padding-right:10px;" />
<img align="left" alt="GitHub light" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png#gh-light-mode-only" style="padding-right:10px;" />
<img align="left" alt="Terminal light" width="26px" src="https://github.com/codeSTACKr/codeSTACKr/raw/master/img/terminal-light.svg#gh-light-mode-only" />
<img align="left" alt="Terminal dark" width="26px" src="https://github.com/codeSTACKr/codeSTACKr/raw/master/img/terminal-dark.svg#gh-dark-mode-only" />

<br />
<br />

## Installation

Use the yarn package manager [yarn](https://yarnpkg.com/getting-started) to install needed packages.

```bash
yarn install
```

## Run

```bash
npm start
```
```Browser
localhost:3000
```

## Link to Demo

[Demo Link](https://mtgacardfinder.herokuapp.com/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## My GitHub Stats
<details>
  <summary>:zap: GitHub Stats</summary>
  <img align="left" alt="ceckles' GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=ceckles&show_icons=true&hide_border=false&theme=slateorange" />
  </details><br/></br><br/><br/><br/><br/><br/>

## My Skills
[![My Skills](https://skillicons.dev/icons?i=bash,bootstrap,cs,css,deno,docker,express,git,html,java,js,jenkins,linux,materialui,mongodb,nodejs,react,swift,ts,vscode)](https://skillicons.dev)

## Special thanks:
    -- [Micku](https://github.com/micku/mana-cost) for the Mana ManaImages and CSS
    -- [Scryfall](https://scryfall.com/docs/api) for Card Query API
