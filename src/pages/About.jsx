function About() {
  return (
    <div className='card'>
      <div className='card-content'>
        <span className='card-title center' style={{ fontSize: '2.5rem' }}>
          This is a SPA pet-project to create a meal catalog
        </span>
        <h6
          className='center'
          style={{ fontSize: '1.75rem', margin: '2rem auto 1rem' }}
        >
          Resources and technologies used:
        </h6>
        <ol style={{ fontSize: '1.25rem', margin: '1rem auto' }}>
          <li>TheMealDB - Free Meal API was used for queries</li>
          <li>Routing is done with React Router v6</li>
          <li>
            Materialize CSS is used for visual design - A modern responsive
            front-end framework based on Material Design was used
          </li>
        </ol>
      </div>
      <h6 className='center' style={{ fontSize: '1.75rem' }}>
        Implemented functionality:
      </h6>
      <ul className='browser-default' style={{ fontSize: '1.25rem', margin: '1rem 1.5rem' }}>
        <li>
					Pages
          <ul className='browser-default'>
            <li>Home page with the cards of dish categories</li>
            <li>Page with the cards of dishes by category</li>
            <li>Recipe page</li>
            <li>Project description page</li>
            <li>"Not found" page for incorrectly specified URLs</li>
          </ul>
        </li>
        <li>Search bar for a category search</li>
        <li>Navigation to go back and to home page</li>
        <li>
          Ingredient table with measures as well as a video recipe - an embedded
          youtube video
        </li>
      </ul>
    </div>
  );
}

export default About;
