import React, { useContext, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../../context/appContext";

const Search = ({ close }) => {
  // context api
  const [, setAppState] = useContext(AppContext);

  const [query, setQuery] = useState("");

  // fetch query id
  const handleId = () => {
    axios
      .get(`https://www.metaweather.com/api/location/search/?query=${query}`)
      .then((res) => {
        setAppState((prev) => {
          return { ...prev, woeid: res.data[0]?.woeid };
        });
        close();
        setQuery("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <SearchStyles>
        <div className="input_group">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search location"
            type="text"
          />
          <button onClick={handleId}>Search</button>
        </div>
        <ul>
          <li>
            London <AiOutlineArrowRight className="list_icon" />
          </li>
          <li>
            Paris <AiOutlineArrowRight className="list_icon" />
          </li>
          <li>
            Dubai <AiOutlineArrowRight className="list_icon" />
          </li>
        </ul>
      </SearchStyles>
    </>
  );
};

export default Search;
const SearchStyles = styled.div`
  width: 100%;
  margin-top: 3rem;

  .input_group {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      display: block;
      width: 70%;
      height: 38px;
      background: none;
      border: 1.2px solid var(--white-color);
      color: var(--grey-color);
      padding: 0.3rem 0.8rem;
      font-weight: bold;
    }

    button {
      display: block;
      width: 28%;
      height: 38px;
      background: var(--blue-color);
      border: 1px solid var(--blue-color);
      color: var(--white-color);
      transition: all 0.3s ease-in-out;

      &:hover {
        background: var(--secondary-color);
        border: 1px solid var(--primary-color);
      }
    }
  }

  ul {
    margin-top: 2.5rem;
    list-style: none;

    li {
      width: 100%;
      height: 39px;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      padding: 0.5rem;
      border: 1px solid var(--secondary-color);
      display: flex;
      align-items: center;
      justify-content: space-between;

      .list_icon {
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        border: 1px solid var(--white-color);

        .list_icon {
          opacity: 1;
        }
      }
    }
  }
`;
