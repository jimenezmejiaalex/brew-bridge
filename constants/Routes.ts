export const Routes = {
  Home: { title: "Home", name: "index", path: "/(tabs)" },
  Explore: { title: "Explore", name: "explore", path: "/(tabs)/explore" },
  Recipe: {
    title: "Recipe",
    name: "(recipe)/[id]",
    path: "(screens)/(recipe)/[id]",
  },
  Product: {
    title: "Product",
    name: "(product)/[id]",
    path: "(screens)/(product)/[id]",
  },
  RecipeModal: {
    title: "RecipeModal",
    name: "(screens)/(modals)/recipe",
    path: "(screens)/(modals)/recipe",
  },
};
