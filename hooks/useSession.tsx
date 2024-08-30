import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Session } from '@/types/auth'
import { router } from 'expo-router'

export default function useSession() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        const checkSession = async () => {
            try {
                const token = await AsyncStorage.getItem("token")
                const expires = await AsyncStorage.getItem("expires")
                const user = await AsyncStorage.getItem("user")

                if (!token || !expires || !user) {
                    setSession(null)
                    return
                }

                const expiresDate = new Date(expires)

                if (expiresDate <= new Date()) {
                    // Token expired, clear session
                    await AsyncStorage.removeItem("token")
                    await AsyncStorage.removeItem("expires")
                    await AsyncStorage.removeItem("user")
                    setSession(null)

                    router.push("/sign-in")
                    return
                }

                setSession({
                    token: token,
                    user: JSON.parse(user),
                })

            } catch (error) {
                console.log("Error getting session")
                console.log(error)
                setSession(null)
            }
        }

        checkSession()
    }, [])

    return session
}
