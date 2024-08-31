import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '@/types/auth'
import { router } from 'expo-router'

export default function useSession() {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const clearStorage = () => {
        setUser(null)
        setToken(null)
    }

    useEffect(() => {
        const checkSession = async () => {
            setIsLoading(true)
            try {
                const token = await AsyncStorage.getItem("token")
                const expires = await AsyncStorage.getItem("expires")
                const user = await AsyncStorage.getItem("user")

                if (!token || !expires || !user) {
                    clearStorage()
                    setIsLoading(false)
                    router.push("/(auth)/sign-in")
                    return
                }

                const expiresDate = new Date(expires)

                if (expiresDate <= new Date()) {
                    // Token expired, clear session
                    await AsyncStorage.removeItem("token")
                    await AsyncStorage.removeItem("expires")
                    await AsyncStorage.removeItem("user")
                    clearStorage()

                    setIsLoading(false)
                    setError("Tu session ha expirado")

                    router.push("/sign-in")
                    return
                }

                setUser(JSON.parse(user))
                setToken(token)
                setIsLoading(false)
                setError(null)

            } catch (error) {
                console.log("Error getting session")
                console.log(error)
                setIsLoading(false)
                clearStorage()
            }
        }

        checkSession()
    }, [])

    return { user, token, error, isLoading }
}
