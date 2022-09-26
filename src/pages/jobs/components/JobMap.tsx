import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { offers } from '@/utils/mockdata';
import { Card, Text, Image, Center, Grid } from '@mantine/core';
import JobIcon from './JobIcon';
import { jobList } from '@/utils/constant';
// import 'leaflet-draw/dist/leaflet.draw.css';

function getLanguageLogo(skills: any) {
  const languages = skills
    .map((item: any) => {
      const jobResult = jobList.find((job) => item.name.includes(job.name));
      return jobResult;
    })
    .filter((element: any) => {
      return element !== undefined;
    });
  return languages;
}

export default function JobMap() {
  return (
    <MapContainer
      center={[52.1934, 21.03487]} // latitude, longitude of Mokotów city_Poland
      zoom={10}
      scrollWheelZoom={true}
      style={{
        height: 'calc(100vh - 70px - 100px - 30px)',
        minHeight: '400px',
        width: '100%',
        minWidth: '200px',
        boxSizing: 'border-box',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers.length > 0 &&
        offers.map(
          ({
            id: _id,
            latitude,
            longitude,
            title: name,
            company_logo_url: photo,
            company_name: headline,
            skills,
          }) => (
            <Marker
              icon={JobIcon(
                getLanguageLogo(skills) && getLanguageLogo(skills).length > 0
                  ? getLanguageLogo(skills)[0].url
                  : jobList[14].url,
                50
              )}
              key={_id}
              position={[Number(latitude), Number(longitude)]}
            >
              <Popup>
                <Card>
                  <Grid>
                    <Grid.Col span={6}>
                      <Center className="h-full">
                        <Image src={photo} width={60} height={'auto'} />
                      </Center>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Text style={{ margin: '.5em 0 .65em' }}>
                        <a href={`#`}>{name}</a>
                      </Text>
                      <Text>{headline}</Text>
                    </Grid.Col>
                  </Grid>
                </Card>
              </Popup>
            </Marker>
          )
        )}
      <Marker position={[52.1934, 21.03487]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
