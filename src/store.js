import create from 'zustand';

const sessionData = sessionStorage.getItem('chosenGames');
let chosenState = sessionData && sessionData !== [] ? JSON.parse(sessionData) : []

const useStore = create((set) => ({
  chosenGames: [...chosenState],
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
  setNumberOfLineupsShown: (amount) => set(state => ({ numberOfLineupsShown: amount})),
  savedPicks: [],
  updateSavedPicks: (picks) => set(state => ({ savedPicks: [...picks]}))
}))

export default useStore;