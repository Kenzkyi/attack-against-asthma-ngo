import ApplicationForm from '../components/ApplicationForm'
import HeroPart from '../components/HeroPart'
import "../style/Volunteer.css"

const Volunteer = () => {
  return (
    <div className="bodyCon" >
      <HeroPart settingHeroPart="volunteer"/>
      <ApplicationForm settingFormType="volunteer" />
    </div>
  )
}

export default Volunteer
