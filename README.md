# Weatherify 🌤️

![Microverse](https://img.shields.io/badge/-Microverse-6F23FF?style=for-the-badge)

## Library Directory 📙

| Contents                  |
| ------------------------- |
| [Built With](#built-with) |
| [Live Demo](#live-demo)   |
| [Install](#install)   |
| [Testing](#testing)   |
| [Authors](#authors)       |
| [License](#license)       |

## Description

> The purpose of this project was to create a weather app using an API

![screenshot](./assets/images/main-sc.png)

I have created a weather app that allows you to search for any city and returns its weather information. It includes details of its temperature, description, feels like, humidity, wind speed, cloud coverage, sunrise and sunset time. Along with that, you can also change between Celsius and Fahrenheit.

I have also included an image API that retrieves data from `Unsplash` and displays a background image of the location.

## Built With 🛠

```
- JavaScript
- OpenWeatherMap API
- Unsplash API
- Tailwind CSS
- Webpack
- HTML5
- Netlify
- VS Code
```

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white&labelColor=000)
![UnSplash API](https://img.shields.io/badge/-Unsplash_API-000?style=for-the-badge&logo=Unsplash&logoColor=white&labelColor=000)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=Tailwind-CSS&logoColor=white&labelColor=000)
![Webpack](https://img.shields.io/badge/-Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white&labelColor=000)
![npm](https://img.shields.io/badge/-npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&labelColor=000)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white&labelColor=000)
![Netlify](https://img.shields.io/badge/-Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white&labelColor=000)
![VS Code](https://img.shields.io/badge/-VS_Code-007ACC?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white&labelColor=000)

## Live Demo 🎥

<a href="https://weatherify-application.netlify.app/"><img src="https://www.netlify.com/img/deploy/button.svg" alt="weather app"></a>

## Install ⏳

> Follow these steps below to get my Application working. I used [npm](https://www.npmjs.com/) to manage all my packages for JavaScript. If you don't have it installed already, you can install it [here](https://www.npmjs.com/get-npm)

1. - [ ] Open your `Terminal`
2. - [ ] Navigate to the directory where you will like to install the repo by running `cd weatherify`
3. - [ ] Run `git clone git@github.com:DcRonan/weatherify.git` to download <b>or</b> you can download using `HTTPS` by running `git clone https://github.com/DcRonan/weatherify.git` in the terminal
4. - [ ] Run `cd weatherify` to enter the directory
5. - [ ] Run `npm i` to install all the packages
6. - [ ] Sign up [here](https://home.openweathermap.org/users/sign_up) for your own API key (You will receive the key via email and can access it in your account)
7. - [ ] Create a `key.js` file in `src/js/components` directory
8. - [ ] Add below to your `key.js` file
```
const key = 'YOUR_API_KEY_HERE';

export default key;
```
9. - [ ] Run `npm run build` to build the app
10. - [ ] Go on your preferred `browser` and open `dist/index.html` in the folder directory


## Testing ⚙

> I have used linters to test my code, which includes: [webhint](https://webhint.io/), [eslint](https://eslint.org/) and [stylelint](https://stylelint.io/)

1. - [ ] Open `Terminal` again
2. - [ ] Run `cd weatherify` to enter the directory
3. - [ ] Run `npm test` to start testing
4. - [ ] All tests will pass ✅


## Authors

### 👨‍💻 Daniel Ronan

[![GitHub](https://img.shields.io/badge/-GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/DcRonan) <br>
[![LINKEDIN](https://img.shields.io/badge/-LINKEDIN-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/dan-ronan/) <br>
[![EMAIL](https://img.shields.io/badge/-EMAIL-D14836?style=for-the-badge&logo=Mail.Ru&logoColor=white)](mailto:danielconnorronan@gmail.com) <br>
[![TWITTER](https://img.shields.io/badge/-TWITTER-1DA1F2?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/dc_ronan)

### 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/DcRonan/weatherify/issues).

### Show your support

Give a ⭐️ if you like this project!

### License

![Cocoapods](https://img.shields.io/cocoapods/l/AFNetworking?color=red&style=for-the-badge)
