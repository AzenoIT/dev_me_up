export function link(navigation, routeName) {
    return () => {
        return navigation.navigate(routeName);
    };
}