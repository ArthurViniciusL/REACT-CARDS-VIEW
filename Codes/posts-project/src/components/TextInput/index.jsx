import "./style.css";

export const TextInput = ( {searchValue, handleChange, placeholderContent} ) => {
    return (
        <input className="search-Bar"
        type="search"
        onChange={handleChange}
        value={searchValue}
        placeholder={placeholderContent}
        />
    )
}

