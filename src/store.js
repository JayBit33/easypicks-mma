import create from 'zustand';

const useStore = create((set) => ({
  chosenGames: [],
  updateChosenGames: (games) => set((state) => ({ chosenGames: [...games] })),
  initialLineups: [],
  updateInitialLineups: (lineups) => set(state => ({ initialLineups: [...lineups]})),
  displayedLineups: [],
  updateDisplayedLineups: (lineups) => set((state) => ({ displayedLineups: [...lineups] })),
  selectedLineups: [],
  updateSelectedLineups: (lineups) => set((state) => ({ selectedLineups: [...lineups] })),
  deselectedIds: [], 
  setDeselectedIds: (ids) => set(state => ({ deselectedIds: [...ids] })),
  numberOfLineupsShown: 0,
  setNumberOfLineupsShown: (amount) => set(state => ({ numberOfLineupsShown: amount}))
}))

export default useStore;