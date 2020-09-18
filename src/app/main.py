from jinja2 import Enviroment, FileSystemLoader

env = Enviroment (loader=FileSystemLoader("boletaentrega")) 
template = env.get_boletaentrega("boletaentrega.component.html")

usuario = {



}


html = template.render(usuario)
print(html)