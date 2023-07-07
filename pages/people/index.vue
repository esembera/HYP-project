<!--
    Page with the list of all the people.
-->
<template>
    <!--
            Form used to add dogs to the database
        -->
    <div id="peopleTitle">We are on your TEAM.</div>
    <div id="colorContainer"><img id="colorImg" src="../../assets/img/people/color.png" /></div>
    <div id="peopleDescription">
        We're a team of visionaries, driven by our love for innovation and the thrill of discovering untapped potential.
        With diverse backgrounds and a shared entrepreneurial spirit, we bring a personal touch to every partnership. We're
        not just investors, we're your biggest cheerleaders and trusted advisors, here to guide you through the ups and
        downs of the journey!
    </div>
    <div id="peopleGrid">
        <PeopleCard v-for="person in people" :key="person.id" :person="person" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            people: [
                { id: 0, name: 'Lilly Chen', position: 'INVESTOR', image: 'shutterstock_1922652212.jpg', description: 'Lily Chen, a graduate of MIT School of Management, is a seasoned entrepreneur with a background in technology and business strategy. Her expertise and market expansion strategies are invaluable to Zen Ventures\' portfolio companies.', projects: ['Kilo', 'Public Anchor'] },
                { id: 1, name: 'Ava Rodriguez', position: 'INVESTOR', image: 'shutterstock_1972000787.jpg', description: 'Ava Rodriguez holds an MBA in Entrepreneurship from the Wharton School of Business. With her experience as a founder of a socially conscious startup, she brings her expertise in impact investing and sustainable business models.', projects: ['The Lisabon'] },
                { id: 2, name: 'Ethan Reed', position: 'INVESTOR', image: 'shutterstock_2203234427.jpg', description: 'Ethan Reed studied Finance at Stanford University and brings his expertise as a former Investment Analyst at a top-tier VC firm. With a deep understanding of the tech startup ecosystem, he specializes in early-stage investments.', projects: ['Calm'] },
                { id: 3, name: 'Max Thompson', position: 'INVESTOR', image: 'shutterstock_1408432637.jpg', description: 'Max Thompson, an MIT graduate in Computer Science, is a trailblazer in the field of Artificial Intelligence. As a co-founder of a disruptive AI-driven startup, his expertise in AI and machine learning adds immense value to Zen Ventures.', projects: ['H Technology'] },
                { id: 4, name: 'Maya Singh', position: 'INVESTOR', image: 'shutterstock_2132665645.jpg', description: 'Maya Singh, a creative thinker and design enthusiast, holds a degree in Industrial Design from the Rhode Island School of Design. With her expertise in user-centered design, she adds value to Zen Ventures\' portfolio companies.', projects: ['Baba Boom'] },
                { id: 5, name: 'Liam Patel', position: 'INVESTOR', image: 'shutterstock_151912058.jpg', description: 'Liam Patel pursued a Bachelor\'s Degree in Business Administration at the London School of Economics. With his background as an Investment Banking Analyst at a leading financial institution, he excels in financial modeling and deal structuring.', projects: ['Sara'] },
                { id: 6, name: 'Sophia Nguyen', position: 'INVESTOR', image: 'shutterstock_2197737777.jpg', description: 'Sophia Nguyen holds a Master\s Degree in Marketing from Columbia University. With her experience as a Marketing Director at a high-growth e-commerce company, she brings her expertise in digital marketing and customer acquisition to Zen Ventures.', projects: ['La Ventura'] },
                { id: 7, name: 'Noah Sanchez', position: 'INVESTOR', image: 'shutterstock_371076572.jpg', description: 'Noah Sanchez completed his studies in Economics at Yale University. With a keen eye for market trends and investment opportunities, he combines his analytical skills with a passion for supporting innovative startups at Zen Ventures.', projects: ['Comosumo'] },
                { id: 8, name: 'Vesta Gul', position: 'INVESTOR', image: 'shutterstock_1794370630.jpg', description: 'Vesta Gul, holds a masters degree in Design and Engineering. As a co-founder of a sustainable  startup, her expertise in user experience, and vibrant personality add important value to Zen Ventures.', projects: ['Porto'] },
                { id: 9, name: 'Lucas Ramirez', position: 'PARTNER', image: 'shutterstock_2066581961.jpg', description: 'Lucas Ramirez, a graduate of Harvard Business School, has a diverse background in finance and entrepreneurship. As a former founder of a successful startup, he specializes in financial technology investments and strategic business growth.', projects: ['Nobu', 'Lovin'] },
                { id: 10, name: 'Ethan Wallace', position: 'PARTNER', image: 'shutterstock_2156291057.jpg', description: ' Ethan Wallace is a finance prodigy who honed his skills through years of experience in investment banking. With a strong track record of successful deal-making, he brings a strategic and analytical approach to Zen Ventures\' investment decisions.', projects: ['Kim'] },
                { id: 11, name: 'Emily Baker', position: 'PARTNER', image: 'shutterstock_1469286803.jpg', description: 'Emily Baker, a graduate of Stanford\'s School of Engineering, is a software engineer-turned-venture capitalist. With her technical background and experience as a product manager at a tech company, she brings a unique perspective to Zen Ventures.', projects: ['Mini', 'Nerve'] },

            ]
        };
    }
};
</script>

<style>
#peopleTitle {
    font-size: 100px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: bold;
    text-align: center;
}

#colorContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20%;
}

#peopleDescription {
    text-align: justify;
    margin-left: 25%;
    margin-right: 25%;
    font-family: sans-serif;
    margin-top: 30px;
    font-size: 25px;
}

#peopleGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Three columns with equal width */
    grid-gap: 60px;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 50px;
    margin-bottom: 50px;
}

</style>