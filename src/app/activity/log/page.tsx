"use client"
import { useState, useEffect } from "react";
import cssClasses from "./activity.module.css";
import { useDependencies } from '@/app/services/DI/servieces.provider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faFileExport, faCircleDot } from "@fortawesome/free-solid-svg-icons";

export default function ActivityLog() {
    const { activityService } = useDependencies();
    const [activityList, setActivityList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = (fieldValue?) => {
        if (fieldValue) {
            const filteredActivities = activityService.filterPosts(fieldValue);
            setActivityList(filteredActivities);
        } else {
            const allActivities = activityService.getAllActivities();
            setActivityList(allActivities);
        }
    };

    const handleFilterClick = () => {
        fetchActivities(inputValue);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <div className={cssClasses.searchSection}>
                <div className={cssClasses.innerContainer}>
                    <input 
                        type="text" 
                        className={cssClasses.inputField} 
                        placeholder="Search name, email or actions..."
                        onChange={handleInputChange}
                    />
                    <button 
                        className={cssClasses.button}
                        onClick={handleFilterClick}
                    >
                        <FontAwesomeIcon 
                            icon={faFilter} 
                        >
                        </FontAwesomeIcon>
                        &nbsp;
                        Filter
                    </button>
                    <button className={cssClasses.button}>
                        <FontAwesomeIcon 
                            icon={faFileExport} 
                        >
                        </FontAwesomeIcon>
                        &nbsp;
                        Export
                    </button>
                    <button className={cssClasses.button}>
                        <FontAwesomeIcon 
                            icon={faCircleDot} 
                            style={{ color: "red" }}
                        >
                        </FontAwesomeIcon>
                        &nbsp;
                        Live
                    </button>
                </div>
            </div>

            <div>
                <table className={cssClasses.table}>
                    <thead className={cssClasses.thead}>
                        <tr className={cssClasses.tr}>
                            <th className={cssClasses.th}>Actor</th>
                            <th className={cssClasses.th}>Action</th>
                            <th className={cssClasses.th}>Date</th>
                        </tr>
                    </thead>
                    <tbody className={cssClasses.tbody}>
                        {activityList.map(({ id, actor_name, occurred_at }) => (
                            <tr className={cssClasses.tr} key={id}>
                                <td className={cssClasses.td}>
                                    <div className={cssClasses.circleWithLetter}>
                                        <div className={cssClasses.circle}>
                                            {actor_name[0]}
                                        </div>
                                        <span>
                                            {actor_name[1]}
                                        </span>
                                    </div>
                                </td>
                                <td className={cssClasses.td}>{actor_name}</td>
                                <td className={cssClasses.td}>{occurred_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
        </div>
    );
}
