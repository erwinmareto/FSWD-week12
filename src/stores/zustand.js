import { create } from 'zustand';

const useStore = create((set) => ({
    squares: Array(9).fill(null),
    setSquares: (data) => set(() => ({squares: data})),
    nextValue: 'O',
    setNextValue: (data) => set(() => ({nextValue: data})),
    winner: '',
    setWinner: (data) => set(() => ({winner: data})),
    status: 'Click to start',
    setStatus: (data) => set(() => ({status: data}))
}))

export default useStore;