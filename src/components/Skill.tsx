interface SkillProps {
  icon: React.ReactNode;
  title: string;
  percentaje: string;
}

function Skill({ icon, title, percentaje }: SkillProps) {

  return (
    <div className="skill" title={title}>
        <p>{icon}</p>
        <small>{percentaje}</small>
    </div>
  )
}

export default Skill