import { create } from 'zustand';

export default useCartStore = create((set) => ({
  items: [],
  addItem: (newItem, quantity) => set((state) => {
    const existingItem = state.items.find(item => item.id === newItem.id);
    if (existingItem) {
      return {
        items: state.items.map(item => 
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        )
      };
    } else {
      return { items: [...state.items, { ...newItem, quantity }] };
    }
  }),
  removeItemById: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  removeAllItems: () => set({ items: [] }),
}));
