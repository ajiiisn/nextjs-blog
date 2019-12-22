import React from 'react';
import Layout from '../common/components/Layout';
import Heading from '../common/components/Heading';
import Text from '../common/components/Text';

const EntryHomepage = () => {
  return (
    <Layout title="Under construction">
      <div css={{ padding: '20px' }}>
        <Heading>Psst,</Heading>
        <Text>aji is currently working day and night to build this site content</Text>
      </div>
      <div css={{ padding: '20px', marginTop: '10px' }}>
        <Heading>Typography</Heading>
        <hr />
        <div css={{ marginTop: '10px' }}>
          <Heading>This is title 1</Heading>
          <Heading tag="h2">This is title 2</Heading>
          <Heading tag="h3">This is title 3</Heading>
          <Heading tag="h4">This is title 4</Heading>
          <Heading tag="h5">This is title 5</Heading>
          <Heading tag="h6">This is title 6</Heading>
        </div>
        <div css={{ marginTop: '30px' }}>
          <Heading variant="subtitle">This is subtitle 1</Heading>
          <Heading variant="subtitle" tag="h2">
            This is subtitle 2
          </Heading>
          <Heading variant="subtitle" tag="h3">
            This is subtitle 3
          </Heading>
          <Heading variant="subtitle" tag="h4">
            This is subtitle 4
          </Heading>
          <Heading variant="subtitle" tag="h5">
            This is subtitle 5
          </Heading>
          <Heading variant="subtitle" tag="h6">
            This is subtitle 6
          </Heading>
        </div>
        <div css={{ marginTop: '30px' }}>
          <Text>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
            whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
            quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting
            zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly
            daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now
            fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W.
            zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips
            galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my
            wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A
            wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk
            pyjamas exchanged for blue quartz. Brawny gods just
          </Text>
        </div>
      </div>
    </Layout>
  );
};

export default EntryHomepage;
