/* eslint-disable react/prop-types */

import ListElements from './ListElements';
import StartSection from './StartSection';

function Resources({ books }) {
  // function List() {
  //   return (
  //     <>
  //       <div>
  //         <section>
  //           <List />
  //         </section>
  //       </div>
  //     </>
  //   );
  // }
  return (
    <>
      <StartSection />
      <div>
        <ListElements books={books} />
      </div>
    </>
  );
}

export default Resources;
