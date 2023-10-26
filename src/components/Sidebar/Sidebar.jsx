import { Input, Icon, Button } from '../index'
import './sidebar.scss'

export const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-header">
      <h3 className="sidebar-title">Filtros</h3>
      <Icon name="filter" />
    </div>

    <div className="sidebar-filters">
      <Input label="Ubicación" />
    </div>
    <Button intent="primary" fill>
      Filtrar
    </Button>
  </div>
)
