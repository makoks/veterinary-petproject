import React, {useEffect, useState} from 'react';
import {
    useQuery,
    gql
} from "@apollo/client";
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

const TABLE_DATA = gql`
    query GetTableData {
        animals {
            id
            name
            kind
            age
            gender
        }
    }
`;

interface AnimalData {
    animals: Animal[]
}

interface Animal {
    id: string,
    name: string,
    kind: string,
    age: number,
    gender: string
}

const MainPage = () => {
    const [rows, setRows] = useState<Animal[]>([]);
    const {loading, data} = useQuery<AnimalData>(TABLE_DATA);
    console.log(data);

    useEffect(() => {
        if (data) {
            setRows(data.animals)
        }
    }, [data]);

    if (loading) return <p>Loading...</p>
    console.log(rows);

    const columns = [
        {name: "id", title: "ID"},
        {name: "name", title: "Имя"},
        {name: "kind", title: "Вид"},
        {name: "age", title: "Возраст"},
        {name: "gender", title: "Пол"}
    ];

    return (
        <div>
            <h1>Наши пациенты</h1>
            <Grid rows={rows} columns={columns}>
                <Table  />
                <TableHeaderRow />
            </Grid>
            {/*{table && <p>{table}</p>}*/}
        </div>
    );
};

export default MainPage;