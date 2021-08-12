import create from 'zustand';

const useStore = create((set) => ({
  chosenGames: [],
  updateChosenGames: (games) => set((state) => ({ chosenGames: [...games] })),
  initialLineups: [],
  updateInitialLineups: (lineups) => set(state => ({ initialLineups: [...lineups]})),
  selectedLineups: [],
  updateSelectedLineups: (lineups) => set((state) => ({ selectedLineups: [...lineups] })),
  deselectedIds: [], 
  setDeselectedIds: (ids) => set(state => ({ deselectedIds: [...ids] }))
}))

export default useStore;