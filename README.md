# Proyecto de parctica de React Native (Expo)

Este proyecto se inicio con

`npx create-expo-app@latest --template`

Eligiendo como plantilla:

`Navigation (Typescript)`

Dependencias intsladas durante desarrollo:

Fuentes:

`npm i @expo-google-fonts/raleway`

`npm i @expo-google-fonts/nunito`

Componentes:

`npm i expo-linear-gradient`

`npm i react-native-app-intro-slider`

`npx expo install expo-image`

Responsividad:

`npm i react-native-responsive-screen`

`npm i react-native-responsive-dimensions`

Almacenamiento:

`npm i @react-native-async-storage/async-storage`

APIS:

Se esta usando usando [Mocky](https://designer.mocky.io/) para simular la respuesta de un login

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 12345,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "username": "johndoe",
      "role": "user",
    },
    "token": "abcdefghij-123456789",
    "token_type": "Bearer",
    "expires_in": 3600
  }
}
```
