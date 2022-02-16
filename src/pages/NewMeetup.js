import { useNavigate } from "react-router-dom"

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

    function onAddMeetupHandler(meetupData){
        //https://react-course-554cf-default-rtdb.europe-west1.firebasedatabase.app/
        fetch("https://react-course-554cf-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
        {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            navigate("/", { replace: true });
        })
        ;
    }
    return <section>
        <h1>Add new meetup</h1>
        <NewMeetupForm onAddMeetup={onAddMeetupHandler}></NewMeetupForm>
    </section>
}

export default NewMeetupPage;