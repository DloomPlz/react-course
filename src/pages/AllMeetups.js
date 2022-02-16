import { useState, useEffect } from 'react'

import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=> {
    const url = props.url;

    fetch("https://react-course-554cf-default-rtdb.europe-west1.firebasedatabase.app/meetups.json").then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup)
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    })
  }, [isLoading])

  

  if(isLoading){
    return <section>
      <p>Loading ...</p>
    </section>
  }

    return <section>
        <h1>All meetups page</h1>
        <MeetupList meetups={loadedMeetups}/>
        
    </section>
}

export default AllMeetupsPage;