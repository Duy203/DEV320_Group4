module.exports = {
    // Create action
    create: async function(req, res) {
      try {
        const { name, location, date , host , additionalMessage } = req.body;
        let events = await CalendarEvent.create({ name, location, date, host, additionalMessage }).fetch();
        events = [events];
        return res.view('pages/listevents',{events} );
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    // Read action
    find: async function(req, res) {
      try {
        const events = await CalendarEvent.find();
        //return res.json(events);
        return res.view('pages/listevents',{events})
      } catch (err) {
        return res.serverError(err);
      }
    },
  
   
  update: async function(req, res) {
    try {
      const updatedEvent = await CalendarEvent.updateOne({ id: req.params.id }).set({
        name: req.body.name,
        location: req.body.location,
        date: req.body.date,
        host: req.body.host,
        additionalMessage: req.body.additionalMessage,
      });
      if (!updatedEvent) {
        return res.notFound('Event not found');
      }
      return res.redirect('/listevents'); // Or wherever you want to redirect after update
    } catch (err) {
      return res.serverError(err);
    }
  },
  
  showUpdateForm: async function(req, res) {
    try {
        const event = await CalendarEvent.findOne({ id: req.params.id });
        if (!event) {
            return res.notFound('Event not found');
        }
        return res.view('pages/updateEvent', { event: event });
    } catch (err) {
        return res.serverError(err);
    }
},



    // Delete action
    delete: async function(req, res) {
      try {
        const { id } = req.params;
        const deletedEvent = await CalendarEvent.destroyOne({ id });
        if (!deletedEvent) {
          return res.notFound('Event not found');
        }
        return res.json(deletedEvent);
      } catch (err) {
        return res.serverError(err);
      }
    },


    
  };