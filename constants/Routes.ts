export const Routes = {
  Home: { title: "Home", name: "index", path: "/(tabs)" },
  Explore: { title: "Explore", name: "explore", path: "/(tabs)/explore" },
  Recipe: {
    title: "Recipe",
    name: "(recipe)/[id]",
    path: "(screens)/(recipe)/[id]",
  },
};
