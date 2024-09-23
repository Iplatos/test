import { create } from 'zustand'

export type AuthState = {
  accessToken: string | null
  refreshToken: string | null
  setAuth: (accessToken: string, refreshToken: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  setAuth: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
  clearAuth: () => set({ accessToken: null, refreshToken: null }),
}))
