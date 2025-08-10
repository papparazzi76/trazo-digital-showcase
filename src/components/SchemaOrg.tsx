import { Helmet } from 'react-helmet-async';

type SchemaType = 'Article' | 'Service' | 'Blog' | 'PrivacyPolicy' | 'WebPage';

interface SchemaOrgProps {
  schema: object;
  type: SchemaType;
}

const SchemaOrg = ({ schema, type }: SchemaOrgProps) => {
  const schemaWithType = {
    '@context': 'https://schema.org',
    '@type': type,
    ...schema,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaWithType)}</script>
    </Helmet>
  );
};

export default SchemaOrg;
