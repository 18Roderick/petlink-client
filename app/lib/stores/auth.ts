// app/lib/stores/auth.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: string
  username: string
  email: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface AuthActions {
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  refreshToken: () => Promise<void>
  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
  setError: (error: string | null) => void
}

export type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (username: string, password: string) => {
        set({ isLoading: true, error: null })
        try {
          // TODO: Implement actual API call
          console.log('Logging in with:', username, password)
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000))
          
          // Mock user data
          const mockUser: User = {
            id: '1',
            username,
            email: `${username}@example.com`,
          }
          const mockToken = 'mock-jwt-token'

          set({
            user: mockUser,
            token: mockToken,
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Login failed',
            isLoading: false,
          })
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        })
      },

      refreshToken: async () => {
        set({ isLoading: true })
        try {
          // TODO: Implement actual token refresh
          await new Promise((resolve) => setTimeout(resolve, 500))
          set({ isLoading: false })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Token refresh failed',
            isLoading: false,
          })
        }
      },

      setUser: (user: User | null) => set({ user }),
      setToken: (token: string | null) => set({ token }),
      setError: (error: string | null) => set({ error }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
