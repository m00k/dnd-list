export const move = <T>(list: T[], from: number, to: number): T[] => {
    if (to > from) {
        return [
            ...list.slice(0, from),
            ...list.slice(from + 1, to + 1),
            [...list][from],
            ...list.slice(to + 1),
        ];
    } else if (to < from) {
        return [
            ...list.slice(0, to),
            [...list][from],
            ...list.slice(to, from),
            ...list.slice(from + 1),
        ];
    }
    return [...list];
};