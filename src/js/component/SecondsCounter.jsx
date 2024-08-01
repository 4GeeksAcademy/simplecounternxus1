import Card from "./Card"

const SecondsCounter = ({seconds}) => {

       return (
        <div className="container-fluid d-flex justify-content-center gap-2 bg-dark">
            <Card number = {Math.floor (seconds % 1000000/100000)}>
            <Card number = {Math.floor (seconds % 100000/10000)}>
            <Card number = {Math.floor (seconds % 10000/1000)}>
            <Card number = {Math.floor (seconds % 1000/100)}>
            <Card number = {Math.floor (seconds % 100/10)}>
            <Card number={seconds % 10}/>

        </div>
    )
}

