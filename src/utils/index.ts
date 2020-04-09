export const groupByLetter = (data: any) => {
    const grouped = data.reduce((r: any, e: any) => {
        const key = e.name[0];
        if (!r[key]) r[key] = []
        r[key].push(e);
        return r;
    }, {});

    return grouped;
}

export const groupByLocation = (data: any) => {
    const grouped = data.reduce((r: any, e: any) => {
        const key = e.location;
        if (!r[key]) r[key] = []
        r[key].push(e);
        return r;
    }, {});

    return grouped;
}

export const groupByDepartment = (data: any) => {
    const grouped = data.reduce((r: any, e: any) => {
        const key = e.department;
        if (!r[key]) r[key] = []
        r[key].push(e);
        return r;
    }, {});

    return grouped;
}

export const getById = (data: any, id: any) => {
    return data.filter((datum: any) => datum.id === id)[0];
}

export const isHome = (location: string) => location === '/';