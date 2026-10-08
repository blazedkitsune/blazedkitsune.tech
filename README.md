# blazedkitsune.tech

how to build:

first clone only the most recent commit:
```bash
git clone --depth 1 https://github.com/blazedkitsune/blazedkitsune.tech
```
go in the directory
```bash
cd blazedkitsune.tech
```
install the npm packages:
```bash
npm ci
```
build the static files (will be located in _site):
```bash
npx @11ty/eleventy
```
OR

if you want to open a live-server:
```bash
npx @11ty/eleventy --serve
```
