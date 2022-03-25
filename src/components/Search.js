import React from "react";
import styled from "styled-components";
import useInput from "../useInput";
// import useCoord from "../useCoord";
// import { GeolocateControl } from "react-map-gl";

const Search = ({setOrigin}) => {
    const address = useInput("");
    // const coord = useCoord();

    return(
        <Wrapper>
            <Input
                placeholder="Address"
                {...address}
                isTyping={address.value !== ""}
            />
            {/* <GeolocateControl
                style={geolocateStyle}
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
            /> */}
            {address.suggestions?.length > 0 && (
                <SuggestionWrapper>
                {address.suggestions.map((suggestion, index) => {
                    return (
                    <Suggestion
                        key={index}
                        onClick={() => {
                            address.setValue(suggestion.place_name);
                            address.setSuggestions([]);
                            // coord.setOrigin(suggestion.geometry.coordinates[0], suggestion.geometry.coordinates[1]);
                            setOrigin(suggestion.geometry.coordinates[0], suggestion.geometry.coordinates[1]);
                        }}
                    >
                        {suggestion.place_name}
                    </Suggestion>
                    );
                })}
                </SuggestionWrapper>
            )}
        </Wrapper>
    )

}


export default Search;

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 85.6%;
    margin: auto;
    margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  background: white;
  border: grey solid 1px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  display: grid;
  justify-self: center;
  &:focus {
    outline: none;
    border-radius: ${(props) => props.isTyping && "10px 10px 0px 0px"};
  }
`;

const SuggestionWrapper = styled.div`
  background: white;
  border: grey solid 1px;
  position: absolute;
  width: 84.5%;
  border-radius: 0px 0px 10px 10px;
`;

const Suggestion = styled.p`
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
      background-color: rgb(235, 235, 235);
  }
`;