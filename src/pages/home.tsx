import Card from "@/components/card";

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-6 bg-purple-200">
      <Card
        title="Home"
        description="Welcome to the Home Page."
        buttonText="Read More"
      />

      <Card
        title="About"
        description="Learn more about our application."
        buttonText="Learn More"
      />

      <Card
        title="Contact"
        description="Get in touch with us."
        buttonText="Contact Us"
      />
    </div>
  );
}

export default HomePage;