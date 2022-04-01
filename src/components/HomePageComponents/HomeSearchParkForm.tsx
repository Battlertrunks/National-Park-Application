import "./HomeSearchParkForm.css";

const HomeSearchParkForm = () => {
  return (
    <form className="HomeSearchParkForm">
      <h3>Find your Next Adventure Now</h3>
      <input type="text" name="search-park" id="search-park" />
      <button>Submit</button>
    </form>
  );
};

export default HomeSearchParkForm;
