import axios from 'axios'
import React, { useState } from 'react'
import users from '../data/users.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

export default function useAuth() {
    const api = process.env.EXPO_PUBLIC_ENDPOINT_LOGIN
    const [error, setError] = useState<string | null>(null)

    const login = async (email: string, password: string) => {
        if (!api) {
            return
        }
        if (email.trim() === "" || password.trim() === "") {
            console.log("Email and Password are required")
            setError("Email and Password are required")
            return
        }

        const user = users.find(user => user.name === email && user.password === password)

        if (!user) {
            setError("Invalid credentials")
            return
        }

        try {
            const res = await axios.post(`${api}?mocky-delay=3000ms`, {
                email,
                password
            })

            await AsyncStorage.setItem("token", JSON.stringify(res.data.data.token))
            await AsyncStorage.setItem("user", JSON.stringify(res.data.data.user))

            const expires = new Date()
            expires.setDate(expires.getDate() + res.data.data.expires_in)

            await AsyncStorage.setItem("expires", JSON.stringify(expires))

            router.push("/(tabs)/home")
            console.log("Login Success")

        } catch (error) {
            console.log("Error Login")
            console.log(error)
            setError("Login failed")
        }
    }

    return {
        login,
        error,
    }
}
