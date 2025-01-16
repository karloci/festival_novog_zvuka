import { defineStore } from 'pinia';

export const useColorStore = defineStore('colorStore', {
    state: () => ({
        activeColor: 'transparent',
        visibleSections: new Set(),
    }),
    actions: {
        setActiveColor(color) {
            this.activeColor = color;
        },
        addVisibleSection(section) {
            this.visibleSections.add(section);
        },
        removeVisibleSection(section) {
            this.visibleSections.delete(section);
        },
        clearVisibleSections() {
            this.visibleSections.clear();
        },
    },
});
