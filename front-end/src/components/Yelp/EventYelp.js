const apiKey =
  "LcVvF_Xoe2QmAFH5FELYuVUFcbYcoM5E0obqonmxE3bwOzliYVUThNp1ttFlEK5VlSKwftemDoAUzik3zxgslj1HiKAx7kvr0JSbQBQS0IZNZQHSHzQ6BelsmNLhXXYx";

  //LcVvF_Xoe2QmAFH5FELYuVUFcbYcoM5E0obqonmxE3bwOzliYVUThNp1ttFlEK5VlSKwftemDoAUzik3zxgslj1HiKAx7kvr0JSbQBQS0IZNZQHSHzQ6BelsmNLhXXYx
  const Yelp = {
    async search(location) {

        let cur_time = Math.floor(new Date().getTime() / 1000)
        const e_rep = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?location=${location}&limit=20&start_date=${cur_time}&radius=8000`, { headers: { Authorization: `Bearer ${apiKey}`, 'Access-Control-Allow-Origin': '*'}  });
        console.log(e_rep);
        const jsonResponse = await e_rep.json();
          if (jsonResponse.events) {
              return jsonResponse.events.map(event => {
                  return {
                      description: event.description,
                      image_url: event.image_url,
                      name: event.name,
                      address: event.location.display_address.join('\n'),
                      event_site_url: event.event_site_url,
                      time_start: event.time_start
                  };
              });
          }
     }
}

  
export default Yelp;