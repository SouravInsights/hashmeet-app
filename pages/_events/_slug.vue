<template>
  <c-box 
    mx="200px" :mt="['40px', '60px', '100px', '100px']" 
    :pb="['40px', '60px', '100px', '100px']" :mb="['40px', '60px', '100px', '100px']"  
    align="center" border="1px solid #F0EBEB" px="120px" bg="#FAFBF9" 
  >
     <h1>{{ this.events }} / {{ this.slug }}</h1>
     <EventCarousel />
     <EventHeader dateTime="Fri AUG 2, 9:00 PM IST" title="Hacktoberfest, Bhubaneswar"  :tags="['Web Development', 'Hackathon', 'Open Source']" />
     <EventSpeakers>
       <div slot="speaker-card">
         <c-stack direction="row" wrap="wrap" justify="flex-start" ml="0px">
          <SpeakerCard src="https://pbs.twimg.com/profile_images/714343349960966144/1zIk50cC_400x400.jpg" name="Tadit Dash" />
          <SpeakerCard src="https://pbs.twimg.com/profile_images/1074659569538715655/BnCrqcUY_400x400.jpg" name="Nirmal Hota" />
          <SpeakerCard src="https://media-exp1.licdn.com/dms/image/C4E03AQFag1BtGwRVBA/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=1GVfTplczMErs5PhuRFVVw7i9mRz9OmE5ZFanx4fTg4" name="Tanmay Biswal" />
          <SpeakerCard src="https://pbs.twimg.com/profile_images/1059357565811716096/UozWp5h-_400x400.jpg" name="Shuvendu Giri" />
          <SpeakerCard src="https://pbs.twimg.com/profile_images/1074659569538715655/BnCrqcUY_400x400.jpg" name="Nirmal Hota" />
          <SpeakerCard src="https://media-exp1.licdn.com/dms/image/C4E03AQFag1BtGwRVBA/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=1GVfTplczMErs5PhuRFVVw7i9mRz9OmE5ZFanx4fTg4" name="Tanmay Biswal" />
          <SpeakerCard src="https://pbs.twimg.com/profile_images/1059357565811716096/UozWp5h-_400x400.jpg" name="Shuvendu Giri" />
         </c-stack>
       </div>
     </EventSpeakers>
  </c-box>   
</template>

<script>
  export default {
    async asyncData({ params }) {
      const events = params.events
      const slug = params.slug
      return { events, slug }
    }
  }
</script>