import { Button , Form } from "react-bootstrap";

function SearchBar({
    setSearchText,
    onClickRefresh
}) {
    const onChangeSearchText = (event) => {
        setSearchText(event.target.value)
    }

    const onKeyPressSearchText = (event) => {
        if (event.charCode === 13) {
            onClickRefresh();
        }
    }

    return(
        <div className="d-flex justify-content-around">
            <Form.Control type="text" placeholder="Search for movies..." 
                onChange={onChangeSearchText}
                onKeyPress={onKeyPressSearchText}
                />
            <Button variant="primary me-1" onClick={onClickRefresh} >Search</Button>
            <Button variant="success" onClick={onClickRefresh}>Refresh</Button>
        </div>
    )
}

export default SearchBar;
