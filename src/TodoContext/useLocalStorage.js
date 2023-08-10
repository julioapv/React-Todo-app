import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(() => {

    setTimeout(() => {

        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            
            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            
                } else {
                parsedItem = JSON.parse(localStorageItem);
                setItem(parsedItem);
                }
    
                setLoading(false);

        } catch (error) {
            setError(true);
            setLoading(false);
        }

    }, 1000)

    }, []);

    const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
    };

    return {
        item, 
        saveItem, 
        loading, 
        error,
    };
}

export { useLocalStorage }; 

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cut onions', completed: false },
//   { text: 'Learn TailWind', completed: true },
//   { text: 'Learn CSS', completed: true },
//   { text: 'Go shopping', completed: false },
//   { text: 'Go camping', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));