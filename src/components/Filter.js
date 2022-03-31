import { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";

function defaultCheckFilters(filters){
    let tempFilterArr = {};
    filters.types.map((type)=> tempFilterArr[type] = true);
    filters.resources.map((resource)=> tempFilterArr[resource] = true);
    filters.region.map((region)=> tempFilterArr[region] = true);
    return tempFilterArr;
}

const Filter = ({filterResults}) => {

    const [filters, setFilters] = useState({
        types: ["cafe", "cc", "library", "mall", "school", "others"],
        resources: ["aircon", "food", "chargingport", "wifi"],
        region: ["central", "north", "northeast", "east", "west"]
      });

      useEffect(()=> {
        filterResults(filters)
      }, [filters]);

      const onFilterChange = (filterType) => {
        var newFilters = [];
        var checkboxes = document.querySelectorAll(`input[name='${filterType}']:checked`);
        Array.from(checkboxes).forEach((checkbox)=>{newFilters.push(checkbox.value)});
        setFilters(prevFilters => {
          return {
            ...prevFilters,
            [filterType]: newFilters
          };
        });
      }

    const [state, setState] = useState({type: false, resources: false, region: false});
    const [checked, setChecked] = useState(defaultCheckFilters(filters));

    const toggleChecked = (event) => {
        setChecked(prevChecked => {
            return{            
                ...prevChecked,
                [event.target.value]: event.target.checked
            }
        });
    }

    const toggleList = (filterType) => {
        switch(filterType){
            case "type":
                setState({
                    type: !state.type
                })
                break;
            case "resources":
                setState({
                    resources: !state.resources
                })
                break;
            case "region":
                setState({
                    region: !state.region
                }) 
                break;
            default:
                break;
        }
    };

    return (
        <div className='filter'>
            <table>
                <tbody>
                    <tr>
                        <td><b>Filters</b></td>
                        <td>
                            <div className='dropdown' data-control="checkbox-dropdown">
                                <label className='dropdown-label' onClick={()=>toggleList("type")}>Type<FaAngleDown className='carret-down'/></label>
                                {state.type === true && (
                                    <div className="dropdown-list">
                                        
                                        <label className="dropdown-option">
                                            <input type="checkbox" name="types" value="cafe" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.cafe}/>
                                            Cafe
                                        </label><br></br>

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="types" value="cc" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.cc}/>
                                            Community Centre
                                        </label><br></br>
                                        
                                        <label className="dropdown-option">
                                            <input type="checkbox" name="types" value="library" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.library}/>
                                            Library
                                        </label><br></br>

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="types" value="mall" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.mall}/>
                                            Mall
                                        </label><br></br>
                                        
                                        <label className="dropdown-option">
                                            <input type="checkbox" name="types" value="school" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.school}/>
                                            School
                                        </label><br></br>

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="types" value="others" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.others}/>
                                            Others
                                        </label><br></br>
                                        
                                    </div>
                                )}
                            </div>
                        </td>
                        <td>
                            <div className='dropdown' data-control="checkbox-dropdown">
                                <label className='dropdown-label' onClick={()=>toggleList("region")}>Region <FaAngleDown className='carret-down'/></label>
                                {state.region === true && (
                                    <div className="dropdown-list">

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="region" value="central" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.central}/>
                                            Central
                                        </label><br></br>

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="region" value="north" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.north}/>
                                                North
                                        </label><br></br>
                                        
                                        <label className="dropdown-option">
                                            <input type="checkbox" name="region" value="northeast" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.northeast}/>
                                            North East
                                        </label><br></br>

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="region" value="west" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.west}/>
                                            West
                                        </label>
                                    </div>
                                )}
                            </div>
                        </td>
                        <td>
                            <div className='dropdown' data-control="checkbox-dropdown">
                                <label className='dropdown-label' onClick={()=>toggleList("resources")}>Resources <FaAngleDown className='carret-down'/></label>
                                {state.resources === true && (
                                    <div className="dropdown-list">

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="resources" value="aircon" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.aircon}/>
                                            Aircon
                                        </label><br></br>

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="resources" value="food" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.food}/>
                                            Food
                                        </label><br></br>

                                        <label className="dropdown-option">
                                            <input type="checkbox" name="resources" value="chargingport" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.chargingport}/>
                                            Charging Ports
                                        </label><br></br>
                                        
                                        <label className="dropdown-option">
                                            <input type="checkbox" name="resources" value="wifi" onChange={(e)=>{onFilterChange(e.target.name);toggleChecked(e)}} defaultChecked={checked.wifi}/>
                                            Wifi
                                        </label>
                                        
                                    </div>
                                )}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Filter;